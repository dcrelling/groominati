class UserProfile < ActiveRecord::Base
    belongs_to :user
    attr_accessible :first_name, :last_name, :user_id, :avatar, :user_name
    has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
end
