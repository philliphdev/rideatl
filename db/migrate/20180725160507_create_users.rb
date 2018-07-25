class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :nickname
      t.string :comments
      t.string :photo_url
      t.references :rides, foreign_key: true

      t.timestamps
    end
  end
end
