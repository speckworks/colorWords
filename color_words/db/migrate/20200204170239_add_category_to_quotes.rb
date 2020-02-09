class AddCategoryToQuotes < ActiveRecord::Migration[6.0]
  def change
    add_column :quotes, :category, :string
  end
end
