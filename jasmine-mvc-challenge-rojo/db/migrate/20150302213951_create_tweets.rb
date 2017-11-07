class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :username
      t.string :content
      t.string :avatar_url

      t.timestamps null: false
    end
  end
end
