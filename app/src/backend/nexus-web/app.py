from sanic import Sanic
from sanic.response import HTTPResponse, text
from sanic.request import Request
from sanic.response import text

debug = True

app = Sanic("nexus")
# app.static("/static", "/path/to/directory")

# @app.get("/")
# async def hello_world(request: Request) -> HTTPResponse:
#     return text("Hello, world.")


from os import path
p = path.join(path.abspath(path.dirname(__file__)), 'public')
# p = path.join(path.abspath(path.dirname(__file__)), 'public')
app.static("/aaa", p)


if __name__ == '__main__':
    import multiprocessing
    workers = multiprocessing.cpu_count()
    print("works:", workers)
    app.run(host='0.0.0.0', port=7000, workers=workers, access_log=debug)