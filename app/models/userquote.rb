class Userquote < ApplicationRecord
    belongs_to :quote
    validates :username, presence: true

end
