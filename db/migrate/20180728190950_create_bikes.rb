class CreateBikes < ActiveRecord::Migration[5.2]
  def change
    create_table :bikes do |t|
      t.string :make
      t.string :model
      t.date :year
      t.string :comments
      t.string :photo_url
      t.boolean :trade
      t.string :trade_details
      t.string :contact
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
