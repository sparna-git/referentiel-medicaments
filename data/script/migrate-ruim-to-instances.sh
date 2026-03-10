# mkdir ../work
# unzip ../ruim/terminologie-ref_interop_med-2026-01.zip -d ../work

update --data=../work/terminologie-ref_interop_med-2026-01.rdf --update=migrate-ruim-to-instances.ru --dump > ../work/terminologie-ref_interop_med-2026-01-instances.ttl

# rm -rf ../work