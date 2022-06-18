class ApplicationController < ActionController::API
  before_action :fake_loaderda

  # 疑似的な遅延
  def fake_loaderda
    sleep(1)
  end
end
