#!/usr/bin/env bash

npm run build && next export && \
mkdir out/foo && mv out/_next out/foo
