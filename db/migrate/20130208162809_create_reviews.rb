class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :content
      t.datetime :created

      t.timestamps
    end
  end
end
