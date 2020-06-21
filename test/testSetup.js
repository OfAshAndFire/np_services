import sinon from 'sinon'
import models from '../models'

const sandbox = sinon.createSandbox()

global.sandbox = sandbox
global.models = models

afterEach(() => {
    global.sandbox.restore()
})
