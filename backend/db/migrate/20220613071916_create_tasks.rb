class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.text :description, null: true
      t.string :status, null: false, default: "begin"

      t.timestamps
    end
  end
end
