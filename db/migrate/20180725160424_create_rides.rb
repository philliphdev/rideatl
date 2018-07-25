class CreateRides < ActiveRecord::Migration[5.2]
  def change
    create_table :rides do |t|
      t.date :ride_date
      t.string :title
      t.string :description
      t.string :start_place
      t.string :end_place
      t.string :contact

      t.timestamps
    end
  end
end
