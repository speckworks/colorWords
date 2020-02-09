class CreateUserQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :userquotes do |t|
      t.integer :quote_id
      t.string :username
    end
  end
end
