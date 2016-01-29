#!/usr/bin/env ruby
hash = {}
puts "// TODO should be loaded in a clean way: angular module"
puts "words_dictionary = ["
ARGF.each_line do |w|
  key = w.chars.sort.join.strip
  hash[key] = [] unless hash[key]
  hash[key] << w.strip
end
hash.each do |key, arr|
  puts "  " + arr.inspect + "," if arr.length >= 2 && arr.length <= 3
end
puts "];"
