class User < ApplicationRecord

    def create
        @user = User.create(user_params)
        render json: @user
    end

    private
    def user_params
        params.permit(:name)
end
