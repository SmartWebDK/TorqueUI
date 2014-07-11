module Tags

    class TabsBlock < Liquid::Block
        def render(context)
            '<div class="toggle-content">' + super + "</div>"
        end
    end

    class TabBlock < Liquid::Block
	    def initialize(tag_name, tab, tokens)
	        super
	        @tab = tab.strip
	    end

	    def render(context)
	        return "" if @tab.empty?

	        site      = context.registers[:site]
	        converter = site.getConverterImpl(Jekyll::Converters::Markdown)

	        lines = super.rstrip.split(/\r\n|\r|\n/).select { |line| line.size > 0 }
	        indentation = lines.map do |line|
	            match = line.match(/^(\s+)[^\s]+/)
	        match ? match[1].size : 0
	        end
	        indentation = indentation.min

	        content = indentation ? super.gsub(/^#{' |\t' * indentation}/, '') : super
	        content = converter.convert(content)
	        content = content.strip # Strip again to avoid "\n"

	        if @tag == @tab
	        	classes = 'pane active'
	        else
	        	classes = 'pane'
	        end

	        '<div id="' + @tab + '" class="'+ classes +'">' + content + "</div>"
	    end
	end


	class TabsNav < Liquid::Block
        def render(context)
            '<ul class="nav nav-tabs">' + super + "</ul>"
        end
    end

    class TabNav < Liquid::Block
	    def initialize(tag_name, tab, tokens)
	        super
	        @tab = tab.strip
	    end

	    def render(context)
	        return "" if @tab.empty?

	        site      = context.registers[:site]
	        converter = site.getConverterImpl(Jekyll::Converters::Markdown)

	        lines = super.rstrip.split(/\r\n|\r|\n/).select { |line| line.size > 0 }
	        indentation = lines.map do |line|
	            match = line.match(/^(\s+)[^\s]+/)
	        match ? match[1].size : 0
	        end
	        indentation = indentation.min

	        content = indentation ? super.gsub(/^#{' |\t' * indentation}/, '') : super
	        content = converter.convert(content)
	        content = content.strip # Strip again to avoid "\n"

	        '<li><a href="#' + @tab + '" data-toggle="content">' + content + "</a></li>"
	    end
	end
end

Liquid::Template.register_tag("tabsnav", Tags::TabsNav)
Liquid::Template.register_tag("tabnav",  Tags::TabNav)
Liquid::Template.register_tag("tabspane", Tags::TabsBlock)
Liquid::Template.register_tag("tabpane",  Tags::TabBlock)
