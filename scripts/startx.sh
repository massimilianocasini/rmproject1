#!/bin/bash
echo "Sto riavviando startx CM3-Panel"
if [ "$1" = "on" ] || [ "$1" = "1" ] || [ "$1" = "ON"  ]; then
ssh openhab@cm3panel.local sudo "/bin/systemctl restart startx"
else
if