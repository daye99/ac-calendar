###
 # @Author: wenzhenjin
 # @Date: 2021-12-24 10:23:07
 # @LastEditTime: 2021-12-24 10:25:41
 # @LastEditors: wenzhenjin
 # @Description: 
 # @FilePath: /ac-calendar/.husky/common.sh
### 

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi