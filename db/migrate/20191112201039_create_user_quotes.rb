class CreateUserQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :userquotes do |t|
      t.integer :quote_id
      t.integer :username
    end
  end
end
