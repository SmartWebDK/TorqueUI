module Tags

    class ExampleBlock < Liquid::Block
        def render(context)
            '<div class="toggle-content">' + super + "</div>"
        end
    end

    class ExampleBlock < Liquid::Block
	    def initialize(tag_name, example, tokens)
	        super
	    end

	    def render(context)

	    end
	end
end
