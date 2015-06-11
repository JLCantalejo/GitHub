class CreateBoxes < ActiveRecord::Migration
  def change
    create_table :boxes do |t|
    	t.integer :quantity
    	t.string :article
    	t.float :unit_price
    	t.float :total_price
      t.timestamps null: false
    end
  end
end
