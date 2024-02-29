class Item < ApplicationRecord
  enum :status, [:good, :bad]
end
