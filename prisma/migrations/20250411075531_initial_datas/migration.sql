-- Insert default admin
INSERT INTO admins (email, password, username) VALUES ('admin@example.com', '$2y$10$8TqzTe6Vjrw/ogjcijwYVOYPGGPJZ1cfqa5qts1IuvaVIZj11tq3S', 'admin');

-- Insert default language
INSERT INTO languages (code, name, is_default, created_at, updated_at) VALUES ('fr', 'Français', true, NOW(), NOW());
INSERT INTO languages (code, name, is_default, created_at, updated_at) VALUES ('en', 'English', false, NOW(), NOW());