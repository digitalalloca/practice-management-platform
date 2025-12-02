-- Sample Data for Testing
-- Run this in Supabase SQL Editor after running schema.sql

-- Insert a sample practice
INSERT INTO practices (id, name, email, phone, address, city, state, zip, country)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Wellness Center Demo',
  'demo@wellnesscenter.com',
  '(555) 123-4567',
  '123 Health Street',
  'San Francisco',
  'CA',
  '94102',
  'USA'
);

-- Insert sample practitioners
INSERT INTO users (id, practice_id, email, first_name, last_name, phone, role, title, color)
VALUES 
  (
    '00000000-0000-0000-0000-000000000011',
    '00000000-0000-0000-0000-000000000001',
    'dr.smith@wellnesscenter.com',
    'John',
    'Smith',
    '(555) 111-1111',
    'practitioner',
    'Physical Therapist',
    '#0ea5e9'
  ),
  (
    '00000000-0000-0000-0000-000000000012',
    '00000000-0000-0000-0000-000000000001',
    'dr.jones@wellnesscenter.com',
    'Sarah',
    'Jones',
    '(555) 222-2222',
    'practitioner',
    'Massage Therapist',
    '#10b981'
  ),
  (
    '00000000-0000-0000-0000-000000000013',
    '00000000-0000-0000-0000-000000000001',
    'dr.lee@wellnesscenter.com',
    'Michael',
    'Lee',
    '(555) 333-3333',
    'practitioner',
    'Chiropractor',
    '#f59e0b'
  );

-- Insert sample clients
INSERT INTO clients (practice_id, first_name, last_name, email, phone, date_of_birth, gender, address, city, state, zip)
VALUES 
  (
    '00000000-0000-0000-0000-000000000001',
    'Sarah',
    'Johnson',
    'sarah.j@email.com',
    '(555) 123-4567',
    '1985-03-15',
    'Female',
    '456 Oak Avenue',
    'San Francisco',
    'CA',
    '94103'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Mike',
    'Brown',
    'mike.b@email.com',
    '(555) 234-5678',
    '1990-07-22',
    'Male',
    '789 Pine Street',
    'San Francisco',
    'CA',
    '94104'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Emily',
    'Davis',
    'emily.d@email.com',
    '(555) 345-6789',
    '1988-11-30',
    'Female',
    '321 Elm Road',
    'San Francisco',
    'CA',
    '94105'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'James',
    'Wilson',
    'james.w@email.com',
    '(555) 456-7890',
    '1975-05-18',
    'Male',
    '654 Maple Drive',
    'San Francisco',
    'CA',
    '94106'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Lisa',
    'Anderson',
    'lisa.a@email.com',
    '(555) 567-8901',
    '1992-09-25',
    'Female',
    '987 Cedar Lane',
    'San Francisco',
    'CA',
    '94107'
  );

-- Insert sample services
INSERT INTO services (practice_id, name, description, duration_minutes, price, color)
VALUES 
  (
    '00000000-0000-0000-0000-000000000001',
    'Initial Consultation',
    'First-time patient evaluation and assessment',
    60,
    150.00,
    '#0ea5e9'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Physical Therapy Session',
    'Standard physical therapy treatment',
    45,
    120.00,
    '#10b981'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Massage Therapy',
    'Therapeutic massage session',
    60,
    100.00,
    '#f59e0b'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Chiropractic Adjustment',
    'Spinal adjustment and alignment',
    30,
    80.00,
    '#ef4444'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Follow-up Visit',
    'Follow-up appointment for ongoing treatment',
    30,
    75.00,
    '#8b5cf6'
  );

-- Insert sample appointments (for today and upcoming days)
INSERT INTO appointments (
  practice_id, 
  practitioner_id, 
  client_id, 
  title, 
  description,
  start_time, 
  end_time, 
  status,
  appointment_type
)
SELECT 
  '00000000-0000-0000-0000-000000000001',
  '00000000-0000-0000-0000-000000000011',
  c.id,
  s.name,
  'Regular appointment',
  CURRENT_DATE + (random() * 7)::int * interval '1 day' + (9 + (random() * 8)::int) * interval '1 hour',
  CURRENT_DATE + (random() * 7)::int * interval '1 day' + (9 + (random() * 8)::int) * interval '1 hour' + s.duration_minutes * interval '1 minute',
  CASE 
    WHEN random() < 0.7 THEN 'scheduled'
    WHEN random() < 0.9 THEN 'completed'
    ELSE 'cancelled'
  END,
  s.name
FROM 
  clients c
  CROSS JOIN services s
WHERE 
  c.practice_id = '00000000-0000-0000-0000-000000000001'
LIMIT 15;

-- Insert sample invoices
INSERT INTO invoices (
  practice_id,
  client_id,
  invoice_number,
  issue_date,
  due_date,
  subtotal,
  tax,
  total,
  amount_paid,
  status
)
SELECT 
  '00000000-0000-0000-0000-000000000001',
  c.id,
  'INV-' || LPAD((ROW_NUMBER() OVER ())::text, 4, '0'),
  CURRENT_DATE - (random() * 30)::int,
  CURRENT_DATE + (random() * 30)::int,
  (50 + random() * 200)::numeric(10,2),
  (5 + random() * 20)::numeric(10,2),
  (55 + random() * 220)::numeric(10,2),
  CASE 
    WHEN random() < 0.6 THEN (55 + random() * 220)::numeric(10,2)
    ELSE 0
  END,
  CASE 
    WHEN random() < 0.6 THEN 'paid'
    WHEN random() < 0.8 THEN 'pending'
    ELSE 'overdue'
  END
FROM 
  clients c
WHERE 
  c.practice_id = '00000000-0000-0000-0000-000000000001'
LIMIT 10;

-- Insert sample client notes
INSERT INTO client_notes (
  practice_id,
  client_id,
  practitioner_id,
  note_type,
  title,
  content
)
SELECT 
  '00000000-0000-0000-0000-000000000001',
  c.id,
  '00000000-0000-0000-0000-000000000011',
  'general',
  'Initial Assessment',
  'Patient presented with lower back pain. Recommended treatment plan includes physical therapy twice weekly for 6 weeks.'
FROM 
  clients c
WHERE 
  c.practice_id = '00000000-0000-0000-0000-000000000001'
LIMIT 5;

-- Success message
SELECT 'Sample data inserted successfully!' as message;