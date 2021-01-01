#!/bin/bash
dir="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
dir="$(dirname "$dir")"
dir="$(dirname "$dir")"

echo "Path: $dir"
cd $dir;

rm "${dir}/public/files";
react-scripts build;
ln -s "${dir}/files" "${dir}/public/files"
# ln -s "${dir}/files" "${dir}/build/files"
