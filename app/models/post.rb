class Post < ActiveRecord::Base
  attr_accessible :content, :user_id, :asset
  has_attached_file :asset, :styles => { :medium => "300x300>", :thumb => "100x100>" }
  belongs_to :user
  acts_as_commentable
end
