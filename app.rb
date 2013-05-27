require "cuba"
require "cuba/render"

Cuba.plugin Cuba::Render

Cuba.define do
  on get do
    on root do
      res.write "hello"
    end
  end
end
