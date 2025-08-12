# spec/lint_spec.rb
require 'open3'

RSpec.describe 'Rubocop lint' do
  it 'has no offenses' do
    stdout, stderr, status = Open3.capture3('bundle exec rubocop')
    puts stdout unless status.success?
    puts stderr unless stderr.empty?
    expect(status.success?).to be true
  end
end
