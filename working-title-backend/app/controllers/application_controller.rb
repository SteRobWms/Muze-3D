class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    # before_action :logsomething
    before_action :logged_in?

    "Here-Is-Your-Easter-Egg-You-1337-H4X0R"

    def encode_token(payload)
        JWT.encode(payload, "Here-Is-Your-Easter-Egg-You-1337-H4X0R")
    end

    def logged_in?
        headers = request.headers["Authorization"]
        token = headers.split(" ")[1]
        begin
            user_id = JWT.decode(token, "Here-Is-Your-Easter-Egg-You-1337-H4X0R")[0]["user_id"]
            @user = User.find(user_id)
        rescue
            @user = nil
        # ensure
            #always runs with an error or without
        end
        render json: {error: "Please log in!"} unless @user
    end

end
