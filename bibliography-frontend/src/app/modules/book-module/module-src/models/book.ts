import { Genre } from 'src/app/core/models/genre'
import { Author } from 'src/app/modules/author-module/module-src/models/author'
import { Publisher } from 'src/app/modules/publisher-module/module-src/models/publisher'

export class Book {
	id?: number
	description?: string
	name?: string
	edition?: number
	editionYear?: number
	isbn?: string
	pageCount?: number

	instanceCount?: number
	issuedCount?: number
	publisher?: Publisher
	authors?: Author[]
	genres?: Genre[]
}
