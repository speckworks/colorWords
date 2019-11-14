class UserquoteSerializer < ActiveModel::Serializer
  attributes :id, :username, :quote_id
  # belongs_to :quote
end
