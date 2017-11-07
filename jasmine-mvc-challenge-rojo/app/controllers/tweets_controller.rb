class TweetsController < ApplicationController
  def index
    @tweets = Tweet.order("created_at DESC")
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    if @tweet.save
      redirect_to root_url
    else
      render plain: @tweet.errors.full_messages, status: 422
    end
  end

  private
  def tweet_params
    params.require(:tweet).permit(:username, :content)
  end

end