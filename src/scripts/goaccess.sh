#/bin/sh
cd /var/log/nginx
/bin/zcat /var/log/nginx/access.log.*.gz \
| /usr/local/bin/goaccess \
-o /var/www/paradigm-threat/files/site/report.html \
-o /var/www/paradigm-threat/files/site/report.json \
--ignore-crawlers --log-format=COMBINED /var/log/nginx/access.log -


uhits=$(jq .general.unique_visitors /var/www/paradigm-threat/files/site/report.json)
echo "Unique Hits: $uhits"
echo "{\"hits\":$uhits}" > /var/www/paradigm-threat/files/site/site.json
