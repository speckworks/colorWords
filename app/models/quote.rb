class Quote < ApplicationRecord
    def create
        @quote = Quote.create(quote_params)
        render json: @quote
    end

    private
    def user_params
        params.permit(:author, :text)
    end

end
