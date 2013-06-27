class Post < ActiveRecord::Base
  belongs_to :user
  #acts_as_commentable   We dont want comments at this point.
  #acts_as_taggable_on :tags
  acts_as_taggable
  attr_accessible :content, :user_id, :asset, :tag_list
  has_attached_file :asset, :styles => { :medium => "300x300>", :thumb => "100x100>" }
end
