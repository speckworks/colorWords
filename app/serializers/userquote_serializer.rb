class UserquoteSerializer < ActiveModel::Serializer
  attributes :id, :quotes, :text, :author, :username
  belongs_to :quotes
end
