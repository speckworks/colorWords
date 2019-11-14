class UserquotesController < ApplicationController
    def index 
    @userquotes = Userquote.all 
    render json: @userquotes
    end

    def create
    @userquote = Userquote.create(userquote_params)
    render json: @userquote
    end

    def show
    @userquote = Userquote.find(params[:id])
    render json: @userquote
    end

    def destroy
    @userquote = Userquote.find(params[:id])
    @userquote.destroy
    end

    def update
    @userquote = Userquote.find(params[:id])
    @userquote.update(userquote_params)
    render json: @userquote
    end

    private
    def userquote_params 
    params.permit(:quote_id, :username)
    end


end
