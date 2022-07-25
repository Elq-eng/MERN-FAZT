-- Active: 1658505372931@@127.0.0.1@3306@tasksdb
-- CREATE TASK
CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300),
  done BOOLEAN NOT NULL DEFAULT 0,
  createAt TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP
)