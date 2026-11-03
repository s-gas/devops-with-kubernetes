FROM alpine:3.23

RUN apk add openssl bash

WORKDIR /script

COPY ./rand_hex.sh .

CMD [ "./rand_hex.sh" ]
