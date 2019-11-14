class QuotesController < ApplicationController
    def index
    @quotes = Quote.all
    render json: @quotes, include: "**"
    end

    def create
        @quote = Quote.create(quote_params)
        render json: @quote
    end

    def show
    @quote = Quote.find(params[:id])
    render json: @quote
    end

    private
    def user_params
        params.permit(:author, :text)
    end
end
