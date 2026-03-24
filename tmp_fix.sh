#!/bin/bash
# Add DNS record
pdnsutil add-record Amanaflow.cloud clients A 600 148.230.98.190

# Update Nginx server_name
sed -i 's/server_name amanaflow.cloud;/server_name amanaflow.cloud clients.amanaflow.cloud;/g' /www/server/panel/vhost/nginx/amanaflow.cloud.conf
nginx -t && nginx -s reload

# Update WHMCS SystemURL
whmcs_config=$(find /www/wwwroot/amanaflow.cloud -name configuration.php)
if [ -f "$whmcs_config" ]; then
    sed -i "s/'SystemURL' => '.*'/'SystemURL' => 'https:\/\/clients.amanaflow.cloud\/'/g" "$whmcs_config"
fi
