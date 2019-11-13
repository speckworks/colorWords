class UserquotesController < ApplicationController
   def index 
    @userquotes = Userquote.all  
    end

    def create
        
    end


end
