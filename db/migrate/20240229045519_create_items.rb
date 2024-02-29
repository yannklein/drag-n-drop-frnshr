class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
      t.integer :status
      t.string :name

      t.timestamps
    end
  end
end
