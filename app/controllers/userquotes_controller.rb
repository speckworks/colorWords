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
    
    end

    private
    def userquote_params 
    params.permit(:quote_id, :username)
    end


end
