class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :author, :text
  has_many :userquotes
end
