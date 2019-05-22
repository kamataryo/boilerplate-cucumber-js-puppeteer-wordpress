import { setWorldConstructor, setDefaultTimeout } from 'cucumber'
import { WordPressWorld } from '../../src'
setWorldConstructor(WordPressWorld)
setDefaultTimeout(60 * 1000)
