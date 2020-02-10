class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :author, :text, :category
  has_many :userquotes
end
