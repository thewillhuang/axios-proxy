import Koa from 'koa';
import compress from 'koa-compress';
import morgan from 'koa-morgan';
import bodyParser from 'koa-bodyparser';
import { isEmpty } from 'ramda';
import request from 'axios';

const { PORT = 3000 } = process.env;

const app = new Koa();

app.use(morgan('dev'));
app.use(compress());
app.use(bodyParser());
app.use(async (ctx) => {
  const { request: { body } } = ctx;
  if (isEmpty(body)) {
    ctx.status = 200;
    ctx.body = 'alive';
  } else {
    const { data } = await request(body);
    ctx.body = data;
  }
});

app.listen(PORT);

console.log(`nodejs server started on port ${PORT}`);
