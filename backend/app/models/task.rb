class Task < ApplicationRecord
  validates :name, :status, presence: true
end
