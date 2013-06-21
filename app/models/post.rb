class Post < ActiveRecord::Base
  belongs_to :user
  acts_as_commentable
  attr_accessible :content, :user_id, :asset
  has_attached_file :asset, :styles => { :medium => "300x300>", :thumb => "100x100>" }
end
