import { setWorldConstructor, setDefaultTimeout } from 'cucumber'
import WordPressWorld from '../../src/wordpress-world'

setWorldConstructor(WordPressWorld)
setDefaultTimeout(60 * 1000)
